"use client";

import { Modal, Checkbox, Button } from "antd";

interface Props {
  open: boolean;
  onClose: () => void;
  selectedProducts: string[];
  setSelectedProducts: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  onApply: () => void;
  onReset: () => void;
}

export default function ProductFilterModal({
  open,
  onClose,
  selectedProducts,
  setSelectedProducts,
  onApply,
  onReset,
}: Props) {
  return (
    <Modal
      title="Product filter"
      open={open}
      onCancel={onClose}
      footer={null}
      width={420}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 20,
        }}
      >
        <Checkbox
  checked={selectedProducts.length === 0}
  onChange={() => {
    setSelectedProducts([]);
  }}
>
  All
</Checkbox>

<Checkbox
  checked={selectedProducts.includes("Judgement")}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedProducts([
        ...selectedProducts,
        "Judgement",
      ]);
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (p) => p !== "Judgement"
        )
      );
    }
  }}
>
  Judgement
</Checkbox>

<Checkbox
  checked={selectedProducts.includes("Interim Order")}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedProducts([
        ...selectedProducts,
        "Interim Order",
      ]);
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (p) => p !== "Interim Order"
        )
      );
    }
  }}
>
  Interim Order
</Checkbox>

<Checkbox
  checked={selectedProducts.includes("Other")}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedProducts([
        ...selectedProducts,
        "Other",
      ]);
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (p) => p !== "Other"
        )
      );
    }
  }}
>
  Other
</Checkbox>
</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
          marginTop: 80,
        }}
      >
        <Button
  onClick={() => {
    setSelectedProducts([]);
  }}
  style={{
    borderRadius: 20,
    height: 40,
    paddingInline: 24,
  }}
>
  Reset Filter
</Button>

        <Button
  type="primary"
  onClick={onApply}
  style={{
    borderRadius: 20,
    height: 40,
    paddingInline: 32,
    background: "#5B1F46",
    borderColor: "#5B1F46",
  }}
>
  Apply
</Button>
      </div>
    </Modal>
  );
}