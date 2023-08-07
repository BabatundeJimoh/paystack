import React from "react";
import { PaystackButton } from "react-paystack";
import { useState } from "react";

function Form() {
  const publicKey = "pk_test_cdbe6ed0a19bc1eaa09b1a94d55bc0eb8aabfc0b";
  const amount = 40000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
          padding: "20px",
          width: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGElMjBzdG9yZSUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Item"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#ddd",
              marginRight: "15px",
            }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              TUNDE'S SHIRTS
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#888",
              }}
            >
              Total Amount: GHS{amount}.00
            </p>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <form>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton
            {...componentProps}
            style={{
              backgroundColor: "#007bff",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
