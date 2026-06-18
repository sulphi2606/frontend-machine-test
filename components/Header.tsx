"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Select,
  Drawer,
  Checkbox,
} from "antd";

import {
  ShareAltOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import TagFilterModal from "./TagFilterModal";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [tagFilterOpen, setTagFilterOpen] =
  useState(false);

const [productFilterOpen,
  setProductFilterOpen] =
  useState(false);
  return (
    <>
      <div
        style={{
          padding: "24px 38px 8px 38px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Section */}
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Certified True Copy (47834)
          </h1>

          <p
            style={{
              marginTop: "4px",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Manage Your CTC Orders Here
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end",
          }}
        >
          {/* Top Row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <Button
              icon={<ShareAltOutlined />}
              style={{
                width: 40,
                height: 40,
              }}
            />

            <Button
              icon={<FilterOutlined />}
              style={{
                width: 40,
                height: 40,
              }}
              onClick={() => setOpen(true)}
            />

            <Input.Search
              placeholder="Search"
              style={{
                width: 230,
                height: 40,
              }}
            />
          </div>

          {/* Bottom Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "#888",
                marginBottom: "2px",
              }}
            >
              Types
            </span>

            <Select
              defaultValue="orders"
              style={{
                width: 110,
              }}
              options={[
                {
                  value: "orders",
                  label: "ORDERS",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
      <Drawer
  title={
    <span
      style={{
        fontSize: "20px",
        fontWeight: 700,
      }}
    >
      Filter Users
    </span>
  }
  placement="right"
  open={open}
  onClose={() => setOpen(false)}
  size="large"
>
  <div style={{ marginTop: 20 }}>
    {/* District */}
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          marginBottom: 8,
          color: "#666",
          fontSize: 14,
        }}
      >
        District
      </div>

      <Select
        placeholder="Choose District"
        style={{
          width: "100%",
          height: 42,
        }}
      />
    </div>

    {/* Court Establishment */}
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          marginBottom: 8,
          color: "#666",
          fontSize: 14,
        }}
      >
        Court Establishment
      </div>

      <Select
        placeholder="Choose Court Establishment"
        style={{
          width: "100%",
          height: 42,
        }}
      />
    </div>

    {/* Product */}
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          marginBottom: 8,
          color: "#666",
          fontSize: 14,
        }}
      >
        Product
      </div>

      <Select
        defaultValue="all"
        style={{
          width: "100%",
          height: 42,
        }}
        options={[
          {
            value: "all",
            label: "All",
          },
        ]}
      />
    </div>

    {/* Checkbox */}
    <Checkbox
      defaultChecked
      style={{
        fontWeight: 600,
      }}
    >
      Test Users
    </Checkbox>

    {/* Bottom Buttons */}
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: 24,
        right: 24,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        style={{
          width: 130,
          height: 40,
          borderRadius: 20,
          borderColor: "#5B1F46",
          color: "#5B1F46",
        }}
      >
        Reset Filter
      </Button>

      <Button
        type="primary"
        style={{
          width: 170,
          height: 40,
          borderRadius: 20,
          background: "#5B1F46",
          borderColor: "#5B1F46",
        }}
      >
        Apply Filter
      </Button>
    </div>
  </div>
</Drawer>
    </>
  );
}