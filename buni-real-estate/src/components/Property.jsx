import { Card, Image } from "@nextui-org/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import Link from "next/link";

const Property = ({ property }) => {
  //console.log("Property: ", property.images);
  return (
    <Card className="w-72 flex flex-col hover:scale-105 rounded-md" shadow="md">
      <img
        radius="none"
        src={
          property?.images?.length > 0 ? property.images[0]
            : `/properties/p1.jpeg`
        }
        className="object-fill w-96 h-48"
      />
      <div className="flex flex-col mt-auto">
        <div className="p-4">
          <p className="font-semibold">{property.title}</p>
          <p className="">
            {property.postal_code}, {property.street_address}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 ">
        {property.bedrooms}
          <FaBed /> | {property.bathrooms} <FaBath /> | {property.area} sqft <BsGridFill />
        </div>
        <div className="bg-black/80 dark:bg-white/80 rounded-md p-4 text-white dark:text-black flex justify-between">
          <p>${property.price}</p>
          <Link
            className="hover:text-primary-500 transition-colors rounded-sm px-1 bg-black/80 dark:bg-white/80 "
            href={`/listings/${property.pkid}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Property;