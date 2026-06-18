"use client";

import { Modal, Input, Button, Select } from "antd";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddClerkModal({
  open,
  onClose,
}: Props) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={700}
      centered
    >
      <div style={{ padding: "10px 0" }}>
        <h2
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Add Clerk
        </h2>

        <p
          style={{
            color: "#888",
            marginTop: 4,
            marginBottom: 30,
          }}
        >
          Add a new authorized person by
          providing details
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {/* Clerk Name */}

          <div>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontSize: 13,
              }}
            >
              Clerk Name
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </label>

            <Input
              placeholder="Enter Clerk Name"
              defaultValue="Gangadharan"
              style={{
                height: 42,
              }}
            />
          </div>

          {/* Phone */}

          <div>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontSize: 13,
              }}
            >
              Phone Number
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </label>

            <Input
              addonBefore={
                <Select
                  defaultValue="+91"
                  style={{
                    width: 80,
                  }}
                  options={[
                    {
                      label: "🇮🇳 +91",
                      value: "+91",
                    },
                  ]}
                />
              }
              placeholder="Phone Number"
              style={{
                height: 42,
              }}
            />
          </div>

          {/* Clerk ID */}

          <div>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontSize: 13,
              }}
            >
              Clerk ID
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </label>

            <Input
              placeholder="Enter Clerk ID"
              style={{
                height: 42,
              }}
            />
          </div>
        </div>

        {/* Footer */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 80,
            paddingTop: 24,
            borderTop:
              "1px solid #f0f0f0",
          }}
        >
          <Button
            onClick={onClose}
            style={{
              borderRadius: 24,
              minWidth: 100,
              borderColor: "#5B1F46",
              color: "#5B1F46",
            }}
          >
            Cancel
          </Button>

          <Button
            type="primary"
            style={{
              borderRadius: 24,
              minWidth: 130,
              background: "#5B1F46",
              borderColor: "#5B1F46",
            }}
          >
            Add & Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}