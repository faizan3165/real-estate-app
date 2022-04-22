import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
	const [
		filters,
		setFilters
	] = useState(filterData);

	const router = useRouter();

	const searchProperties = (filterValues) => {
		const path = router.pathName;
		const { query } = router;

		const values = getFilterValues(filterValues);

		values.forEach((item) => {
			if (item.value && filterValues?.[item.name]) {	
				query[item.name] = item.value;
			}
		});

		router.push({ pathName: path, query });
	};

	return (
		<Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
			{filterData.map((filter) => (
				<Box key={filter.query}>
					<Select
						onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
						placeholder={filter.placeholder}
						w='fit.content'
						p='2'>
						{filter?.items?.map((item) => (
							<option value={item.value} key={item.value}>
								{item.name}
							</option>
						))}
					</Select>
				</Box>
			))}
		</Flex>
	);
};

export default SearchFilters;
