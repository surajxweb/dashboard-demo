"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";
import styles from "./Clerk.module.css";
import PasswordDisplay from "@/components/PasswordDisplay";

const LoginPage = () => {
  return (
    <>
      <PasswordDisplay />

      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
};

export default LoginPage;
