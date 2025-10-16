import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./UiTable";
import Button from "../25_10_14/Button";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  team: {
    images: string[];
  };
  budget: string;
  totalQuantity: string;
}

const tableData:Order[] = [
  {
    id: 1,
    user: {
      image: "/images/cafe/원두사진.jpg",
      name: "커피 원두",
      role: "별다방 원두",
    },
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    totalQuantity: "100",
  },
  {
    id: 2,
    user: {
      image: "/images/cafe/라즈베리시럽.jpg",
      name: "라즈베리 시럽",
      role: "라즈베리 에이드",
    },

    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "24.9K",
    totalQuantity: "101",
  },
  {
    id: 3,
    user: {
      image: "/images/cafe/곡물파우더.jpg",
      name: "곡물 파우더",
      role: "곡물 라떼 전용",
    },

    team: {
      images: ["/images/user/user-27.jpg"],
    },
    budget: "12.7K",
    totalQuantity: "12",
  },
  {
    id: 4,
    user: {
      image: "/images/cafe/초코-딸기시럽.jpg",
      name: "초코&딸기 시럽",
      role: "시럽 세트",
    },

    team: {
      images: [
        "/images/user/user-28.jpg",
        "/images/user/user-29.jpg",
        "/images/user/user-30.jpg",
      ],
    },
    budget: "2.8K",
    totalQuantity: "13",
  },
  {
    id: 5,
    user: {
      image: "/images/cafe/커피시럽.jpg",
      name: "카페 시럽",
      role: "슈가 시럽",
    },
    team: {
      images: [
        "/images/user/user-31.jpg",
        "/images/user/user-32.jpg",
        "/images/user/user-33.jpg",
      ],
    },
    budget: "4.5K",
    totalQuantity: "14",
  },
];

type CounterMap ={
  [key: string]: number;
}

export default function Practice() {
  const [sellQuantity, setSellQuantity] = useState<Record<string,number>>({});

  const handleIncrease = (id:number) => {
    setSellQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };
  const handleDecrease = (id:number) => {
    setSellQuantity((prev) => {
      if (prev[id] > 0) {
        return { ...prev, [id]: prev[id] - 1 };
      } else {
        alert("수량이 0 보다 작을 수 없습니다.");
        return prev;
      }
    });
  };
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                상품 목록
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                구매할 수량
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                구매자
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                총 수량
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                구매자 수
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Button
                    increase={() => handleIncrease(order.id)}
                    sellQuantity={sellQuantity[order.id] || 0}
                    decrease={() => handleDecrease(order.id)}
                  />
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order.team.images.map((teamImage, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                      >
                        <img
                          width={24}
                          height={24}
                          src={teamImage}
                          alt={`Team member ${index + 1}`}
                          className="w-full size-6"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.totalQuantity}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.budget}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
