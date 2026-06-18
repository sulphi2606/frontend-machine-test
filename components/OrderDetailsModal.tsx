"use client";

import { Modal, Button } from "antd";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  order: any;
}

export default function OrderDetailsModal({
  open,
  onClose,
  order,
}: Props) {
  const [activeTab, setActiveTab] =
    useState("customer");

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1000}
      title="Order Details"
    >
      {/* Top Details */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          rowGap: 12,
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        <div>Order ID:</div>
        <div>2298</div>

        <div>Tracking ID:</div>
        <div>EL767335963IN</div>

        <div>Payment completed:</div>
        <div>27 Feb 2026 01:54 PM</div>

        <div>Order placed:</div>
        <div>27 Feb 2026 02:01 PM</div>

        <div>Assigned:</div>
        <div>3 Mar 2026 05:35 PM</div>

        <div>Applied:</div>
        <div>26 Mar 2026 10:45 AM</div>

        <div>Dispatched:</div>
        <div>27 Feb 2026 01:54 PM</div>

        <div>Delivered:</div>
        <div>30 Mar 2026 06:03 PM</div>
      </div>

      {/* Tabs */}

      <div
        style={{
          display: "flex",
          gap: 30,
          borderBottom: "1px solid #e5e5e5",
          marginBottom: 20,
        }}
      >
        <Button
          type="text"
          onClick={() =>
            setActiveTab("customer")
          }
          style={{
            borderBottom:
              activeTab === "customer"
                ? "2px solid #5B1F46"
                : "none",
            borderRadius: 0,
            fontWeight:
              activeTab === "customer"
                ? 600
                : 400,
          }}
        >
          Case & Customer Details
        </Button>

        <Button
          type="text"
          onClick={() =>
            setActiveTab("address")
          }
          style={{
            borderBottom:
              activeTab === "address"
                ? "2px solid #5B1F46"
                : "none",
            borderRadius: 0,
          }}
        >
          Address
        </Button>

        <Button
          type="text"
          onClick={() =>
            setActiveTab("products")
          }
          style={{
            borderBottom:
              activeTab === "products"
                ? "2px solid #5B1F46"
                : "none",
            borderRadius: 0,
          }}
        >
          Products
        </Button>

        <Button
          type="text"
          onClick={() =>
            setActiveTab("esign")
          }
          style={{
            borderBottom:
              activeTab === "esign"
                ? "2px solid #5B1F46"
                : "none",
            borderRadius: 0,
          }}
        >
          Digio eSign Documents
        </Button>
      </div>

      {/* CUSTOMER TAB */}

      {activeTab === "customer" && (
        <div
          style={{
            background: "#f8f8f8",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <p>
            <b>Case Number:</b> OS/300179/2024
          </p>

          <p>
            <b>Legal Name:</b>{" "}
            {order?.user}
          </p>

          <p>
            <b>Name:</b>{" "}
            {order?.user}
          </p>

          <p>
            <b>Email:</b>{" "}
            test@gmail.com
          </p>

          <p>
            <b>Phone:</b>{" "}
            919495862301
          </p>

          <p>
            <b>Delivery Feedback:</b>
          </p>

          <ul>
            <li>Issue: N/A</li>
          </ul>
        </div>
      )}

      {/* ADDRESS TAB */}

      {activeTab === "address" && (
        <div
          style={{
            background: "#f8f8f8",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom: 20,
            }}
          >
            <h4>Address Details</h4>

            <Button>
              Copy Address
            </Button>
          </div>

          <p>
            <b>Pincode:</b> 682028
          </p>

          <p>
            <b>Address Line 1:</b>
            67/67A Flat No D
          </p>

          <p>
            <b>Address Line 2:</b>
            Vennala
          </p>

          <p>
            <b>City:</b> Kochi
          </p>

          <p>
            <b>District:</b> Ernakulam
          </p>

          <p>
            <b>State:</b> Kerala
          </p>

          <p>
            <b>Country:</b> India
          </p>
        </div>
      )}

      {/* PRODUCTS TAB */}

      {activeTab === "products" && (
        <div
          style={{
            background: "#f8f8f8",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <p>
            <b>Product:</b>{" "}
            {order?.product}
          </p>

          <p>
            <b>Amount:</b>{" "}
            {order?.price}
          </p>

          <p>
            <b>Status:</b>{" "}
            {order?.status}
          </p>
        </div>
      )}

      {/* ESIGN TAB */}

      {activeTab === "esign" && (
        <div
          style={{
            background: "#f8f8f8",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <p>
            <b>Document:</b>{" "}
            Signed Order.pdf
          </p>

          <p>
            <b>Signed By:</b>{" "}
            {order?.user}
          </p>

          <p>
            <b>Status:</b> Signed
          </p>

          <Button type="primary">
            Download
          </Button>
        </div>
      )}
    </Modal>
  );
}