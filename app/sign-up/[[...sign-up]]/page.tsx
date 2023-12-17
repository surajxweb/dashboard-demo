"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";
import styles from "../../sign-in/[[...sign-in]]/Clerk.module.css";
import PasswordDisplay from "@/components/PasswordDisplay";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.container}>
        <SignUp />
      </div>
    </>
  );
};

export default RegisterPage;
