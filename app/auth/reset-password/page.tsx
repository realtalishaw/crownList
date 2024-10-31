"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Crown, KeyRound, CheckCircle2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6 pt-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-bold text-center">Check Your Email</h2>
              <p className="text-center text-gray-600">
                We've sent password reset instructions to:
              </p>
              <p className="text-lg font-medium text-purple-600">{email}</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setEmail('');
                  setIsSubmitted(false);
                  setStatus({ type: '', message: '' });
                }}
              >
                Try a different email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-center text-purple-900">
            Reset Password
          </CardTitle>
          <CardDescription className="text-center text-base">
            Enter your email to receive reset instructions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {status.type === 'error' && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              <KeyRound className="mr-2 h-4 w-4" />
              {isLoading ? 'Sending...' : 'Send Reset Instructions'}
            </Button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}