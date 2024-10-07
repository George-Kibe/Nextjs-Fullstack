'use client'
  
import AnimatedText from '@/components/AnimatedText';
import React, { useEffect, useState } from 'react'
import Property from '@/components/Property';
import { Flex } from '@chakra-ui/react';
import { properties } from '@/data/data';

const AllProperties = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <AnimatedText text={"All Properties"} />
        {properties?.length &&
          <div className="container items-center justify-around">
            <Flex flexWrap='wrap' className='flex flex-wrap justify-center gap-6'>
            {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
          </div>
        }
      </div>
    );
  }; 

export default AllProperties;