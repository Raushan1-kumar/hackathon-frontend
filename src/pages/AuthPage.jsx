import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/medical-login-bg.jpg')" }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" onClick={() => setIsLogin(true)}>Login</TabsTrigger>
            <TabsTrigger value="register" onClick={() => setIsLogin(false)}>Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <h2 className="text-2xl font-bold mb-4 text-center">Login to your account</h2>
            <form className="space-y-4">
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <h2 className="text-2xl font-bold mb-4 text-center">Create a new account</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AuthPage;