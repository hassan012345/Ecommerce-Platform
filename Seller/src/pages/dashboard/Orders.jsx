import React from 'react'
import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";

export function Orders() {

  const [ordersData, setOrdersData] = useState([]);
  const [status, setOrderStatus] = useState('processing');

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setOrdersData(data.orders));
  }, []);

  const updateOrderStatus = (orderNumber) => {
    
  }

  return (
    <div className='py-10'>
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Orders
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Order Number", "Date", "Status", "Total Price", "Action"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ordersData.map(
                ({ _id, orderNumber, createdAt, totalPrice, status }, key) => {
                  const className = `py-3 px-5 ${key === ordersData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={orderNumber}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {orderNumber}
                        </Typography>
                        {/* <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div> */}
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {new Date(createdAt).toLocaleDateString()}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={
                            status === 'confirmed' ? 'green' :
                              status === 'processing' ? 'blue-gray' :
                                'red'
                          }
                          value={status}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {totalPrice}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {status}
                        </Typography>
                      </td> */}
                      <td className={className}>
                        {/* <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography> */}
                        <select
                          value={status}
                          onChange={(e) => setOrderStatus(e.target.value)}
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <option value="processing">Processing</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="canceled">Canceled</option>
                        </select>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  )
}

export default Orders;