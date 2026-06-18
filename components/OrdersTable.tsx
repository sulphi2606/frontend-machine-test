"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Select,
  Modal,
  Checkbox,
  Drawer,
} from "antd";
import TagModal from "./TagModal";
import TagFilterModal from "./TagFilterModal";
import ProductFilterModal from "./ProductFilterModal";
import {
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import OrderDetailsModal from "./OrderDetailsModal";
import AddClerkModal from "./AddClerkModal";
const data = [
  {
    key: "1",
    user: "Soji Abraham",
    court: "Court Complex, Kunnamkulam",
    district: "Thrissur",
    product: "Judgement #584854",
    tags: ["Subscription Pending", "Add Case"],
    price: "₹3,500",
    status: "Cancelled",
    days: "",
  },
  {
    key: "2",
    user: "Shaman",
    court: "District Court Thrissur",
    district: "Thrissur",
    product: "Interim Order #487565",
    tags: ["Aadhaar Verified"],
    price: "₹150",
    status: "Order Placed",
    days: "03 days since payment",
  },
  {
    key: "3",
    user: "Gopalan",
    court: "District Court Thrissur",
    district: "Thrissur",
    product: "Other #2500",
    tags: ["Gouri"],
    price: "₹2,500",
    status: "Payment Completed",
    days: "11 days since payment",
  },
];

export default function OrdersTable() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] =
  useState<any>(null);
  const [tagModalOpen, setTagModalOpen] = useState(false);
  const [addClerkOpen, setAddClerkOpen] =
  useState(false);
  const [clerks, setClerks] = useState([
  {
    id: "CL001",
    name: "Shaman",
    phone: "9876543210",
  },
]);

  // Applied filters
  const [selectedProducts, setSelectedProducts] =
    useState<string[]>([]);
  const [selectedTags, setSelectedTags] =
    useState<string[]>([]);

  // Temporary filters (before Apply)
  const [tempProducts, setTempProducts] =
    useState<string[]>([]);
  const [tempTags, setTempTags] =
    useState<string[]>([]);

  const [userFilterOpen, setUserFilterOpen] =
    useState(false);

  const [tagFilterOpen, setTagFilterOpen] =
    useState(false);

  const [productFilterOpen, setProductFilterOpen] =
    useState(false);

  const [assignOpen, setAssignOpen] =
    useState(false);

  const [userFilters, setUserFilters] = useState({
    district: "",
    court: "",
    product: "",
    testUsers: false,
  });

const [tempFilters, setTempFilters] = useState({
  district: "",
  court: "",
  product: "",
  testUsers: false,
}); 
const filteredData = data.filter((item) => {
  const districtMatch =
    !userFilters.district ||
    item.district === userFilters.district;

  const courtMatch =
    !userFilters.court ||
    item.court === userFilters.court;

  const productMatch =
  selectedProducts.length === 0 ||
  selectedProducts.some((product) =>
    item.product.includes(product)
  );

  const testUserMatch =
  !userFilters.testUsers ||
  item.user.toLowerCase().includes("test");

const tagMatch =
  selectedTags.length === 0 ||
  selectedTags.some((tag) =>
    item.tags?.includes(tag)
  );

return (
  districtMatch &&
  courtMatch &&
  productMatch &&
  testUserMatch &&
  tagMatch
);
});
  const columns = [
    {
      title: "#",
      width: 50,
      render: (_: any, __: any, index: number) =>
        index + 1,
    },
    

    {
  title: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span>USER INFO</span>

      <FilterOutlined
        onClick={() => setUserFilterOpen(true)}
        style={{
          cursor: "pointer",
          color: "#666",
        }}
      />
    </div>
  ),
  width: 240,

      render: (record: any) => (
        <div>
          <div
            style={{
              fontWeight: 600,
              marginBottom: 4,
            }}
          >
            {record.user}
          </div>

          <div style={{ color: "#666" }}>
            +91 80861 65790
          </div>

          <div style={{ color: "#666" }}>
            OP/000251/2026
          </div>

          <Button
            size="small"
            className="copy-btn"
            style={{ marginTop: 10 }}
          >
            Copy Address
          </Button>
        </div>
      ),
    },

    {
      title: "COURT COMPLEX",
      width: 200,

      render: (record: any) => (
        <>
          <div
            style={{
              fontWeight: 600,
            }}
          >
            {record.court}
          </div>

          <div
            style={{
              color: "#888",
              marginTop: 4,
            }}
          >
            {record.district}
          </div>
        </>
      ),
    },

    {
  title: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span>PRODUCTS</span>

      <FilterOutlined
        onClick={() =>
          setProductFilterOpen(true)
        }
        style={{
          cursor: "pointer",
          color: "#666",
          fontSize: 14,
        }}
      />
    </div>
  ),
  width: 180,

      render: (record: any) => (
        <>
          <div
            style={{
              fontWeight: 600,
            }}
          >
            {record.product}
          </div>

          <div
            style={{
              color: "#666",
              marginTop: 4,
            }}
          >
            {record.price}
          </div>
        </>
      ),
    },

    {
      title: "ORDER DATE",
      width: 140,

      render: () => (
        <>
          <div>7 Feb 2026</div>

          <div
            style={{
              color: "#888",
              fontSize: 12,
            }}
          >
            12:57 PM
          </div>
        </>
      ),
    },

    {
      title: "STATUS",
      width: 250,

      render: (record: any) => (
        <>
          <Select
            defaultValue="Update Status"
            style={{
              width: 170,
            }}
            options={[
              {
                value: "placed",
                label: "Order Placed",
              },
              {
                value: "cancelled",
                label: "Cancelled",
              },
              {
                value: "completed",
                label: "Payment Completed",
              },
            ]}
          />

          <div style={{ marginTop: 10 }}>
            <span
              className={
                record.status === "Cancelled"
                  ? "status-cancelled"
                  : record.status ===
                    "Payment Completed"
                  ? "status-completed"
                  : "status-placed"
              }
            >
              {record.status}
            </span>
          </div>

          {record.days && (
            <div
              style={{
                color: "#FF6A00",
                marginTop: 8,
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {record.days}
            </div>
          )}
        </>
      ),
    },

    {
      title: "ORDER DETAILS / E-SIGN",
      width: 220,

      render: (record: any) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Button
  className="action-btn"
  onClick={() => {
    setSelectedOrder(record);
    setDetailsOpen(true);
  }}
>
  View
</Button>

          <Button className="action-btn">
            E-sign
          </Button>
        </div>
      ),
    },

    {
  title: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span>TAGS / NOTE</span>

      <FilterOutlined
        onClick={() =>
          setTagFilterOpen(true)
        }
        style={{
          cursor: "pointer",
          color: "#666",
          fontSize: 14,
        }}
      />
    </div>
  ),
  width: 280,

      render: () => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
      }}
    >
      <Select
        placeholder="Choose Tag"
        style={{ width: 120 }}
      />

      <Button
        icon={<EditOutlined />}
        size="small"
        onClick={() => setTagModalOpen(true)}
      />
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}
    >
      <span className="tag tag-blue">
        Subscription Pending
      </span>

      <span className="tag tag-brown">
        Add Case
      </span>

      <span className="tag tag-yellow">
        Aadhaar Verified
      </span>

      <span className="tag tag-green">
        Gouri
      </span>
    </div>
  </div>
),
    },

    {
      title: "CLERK",
      width: 220,

      render: () => (
        <>
          <div
            style={{
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Shabarinath
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 10,
            }}
          >
            <EditOutlined />
            <DeleteOutlined />
            <ShareAltOutlined />
          </div>

          <Button
  size="small"
  className="assign-btn"
  onClick={() => setAssignOpen(true)}
>
  Assign
</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          width: "calc(100vw - 170px)",
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #E5E5E5",
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        <Table
  rowClassName={() => "custom-row"}
  columns={columns}
  dataSource={filteredData}
          pagination={{
            pageSize: 3,
            showSizeChanger: false,
          }}
          scroll={{
            x: 1600,
          }}
        />
      </div>

      <OrderDetailsModal
  open={detailsOpen}
  onClose={() =>
    setDetailsOpen(false)
  }
  order={selectedOrder}
/>
      <TagModal
  open={tagModalOpen}
  onClose={() => setTagModalOpen(false)}
/>

<Modal
  open={assignOpen}
  footer={null}
  onCancel={() => setAssignOpen(false)}
  width={700}
  closeIcon={true}
>
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Assign Authorized Personnel
        </h2>

        <p
          style={{
            color: "#888",
            marginTop: 8,
          }}
        >
          Select the person who is authorized
          to collect CTC document.
        </p>
      </div>

      <Button
  type="primary"
  onClick={() =>
    setAddClerkOpen(true)
  }
  style={{
    background: "#5B1F46",
    borderColor: "#5B1F46",
    height: 40,
    borderRadius: 6,
  }}
>
  + Add New
</Button>
    </div>

    <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(250px, 1fr))",
    columnGap: 80,
    rowGap: 50,
    marginTop: 30,
  }}
>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
    <div
      key={item}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      <Checkbox />

      <img
        src="/person.png"
        alt="person"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <span
        style={{
          fontSize: 18,
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        Shaman
      </span>
    </div>
  ))}
</div>
    {/* More Clerks */}

    <div
      style={{
        marginTop: 30,
      }}
    >
      <div
        style={{
          marginBottom: 10,
          fontWeight: 600,
          color: "#666",
        }}
      >
        More Clerks
      </div>

      <Select
        placeholder="Choose Clerks"
        style={{
          width: "100%",
          height: 52,
        }}
      />
    </div>

    {/* Footer Buttons */}

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 16,
        marginTop: 60,
      }}
    >
      <Button
        style={{
          width: 120,
          height: 44,
          borderRadius: 24,
          borderColor: "#5B1F46",
          color: "#5B1F46",
        }}
      >
        Cancel
      </Button>

      <Button
        type="primary"
        style={{
          width: 230,
          height: 44,
          borderRadius: 24,
          background: "#5B1F46",
          borderColor: "#5B1F46",
        }}
      >
        Assign Personnel
      </Button>
    </div>
  </div>
</Modal>
<Drawer
  title="Filter Users"
  placement="right"
  size="large"
  open={userFilterOpen}
  onClose={() => setUserFilterOpen(false)}
  styles={{
    body: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      flex: 1,
    }}
  >
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          color: "#666",
        }}
      >
        District
      </label>

      <Select
        placeholder="Choose District"
        style={{ width: "100%" }}
        onChange={(value) =>
          setTempFilters((prev) => ({
            ...prev,
            district: value,
          }))
        }
        options={[
          {
            label: "Thrissur",
            value: "Thrissur",
          },
        ]}
      />
    </div>

    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          color: "#666",
        }}
      >
        Court Establishment
      </label>

      <Select
        placeholder="Choose Court Establishment"
        style={{ width: "100%" }}
        onChange={(value) =>
          setTempFilters((prev) => ({
            ...prev,
            court: value,
          }))
        }
        options={[
          {
            label: "District Court Thrissur",
            value: "District Court Thrissur",
          },
          {
            label: "Court Complex, Kunnamkulam",
            value: "Court Complex, Kunnamkulam",
          },
        ]}
      />
    </div>

    <div>
      <label
        style={{
          display: "block",
          marginBottom: 8,
          color: "#666",
        }}
      >
        Product
      </label>

      <Select
        placeholder="All"
        style={{ width: "100%" }}
        onChange={(value) =>
          setTempFilters((prev) => ({
            ...prev,
            product: value,
          }))
        }
        options={[
          {
            label: "All",
            value: "",
          },
          {
            label: "Judgement",
            value: "Judgement",
          },
          {
            label: "Interim Order",
            value: "Interim Order",
          },
          {
            label: "Other",
            value: "Other",
          },
        ]}
      />
    </div>

    <Checkbox
      onChange={(e) =>
        setTempFilters((prev) => ({
          ...prev,
          testUsers: e.target.checked,
        }))
      }
    >
      Test Users
    </Checkbox>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 40,
    }}
  >
    <Button
      onClick={() => {
        const resetFilters = {
          district: "",
          court: "",
          product: "",
          testUsers: false,
        };

        setTempFilters(resetFilters);
        setUserFilters(resetFilters);
      }}
    >
      Reset Filter
    </Button>

    <Button
      type="primary"
      style={{
        background: "#5B1F46",
        borderColor: "#5B1F46",
      }}
      onClick={() => {
        setUserFilters(tempFilters);
        setUserFilterOpen(false);
      }}
    >
      Apply Filter
    </Button>
  </div>
</Drawer>

<ProductFilterModal
  open={productFilterOpen}
  onClose={() =>
    setProductFilterOpen(false)
  }
  selectedProducts={tempProducts}
  setSelectedProducts={setTempProducts}
  onApply={() => {
    setSelectedProducts(tempProducts);
    setProductFilterOpen(false);
  }}
  onReset={() => {
    setTempProducts([]);
    setSelectedProducts([]);
  }}
/>
<TagFilterModal
  open={tagFilterOpen}
  onClose={() => setTagFilterOpen(false)}
  selectedTags={tempTags}
  setSelectedTags={setTempTags}
  onApply={() => {
    setSelectedTags(tempTags);
    setTagFilterOpen(false);
  }}
  onReset={() => {
    setTempTags([]);
    setSelectedTags([]);
  }}
/>
<AddClerkModal
  open={addClerkOpen}
  onClose={() =>
    setAddClerkOpen(false)
  }
/>
    </>
  );
}