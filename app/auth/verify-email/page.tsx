"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle2, XCircle } from "lucide-react";

export default function EmailVerificationPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // Simulate verification process
    const verifyEmail = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setVerificationStatus('success');
      } catch (error) {
        setVerificationStatus('error');
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setVerificationStatus('error');
    }
  }, [token]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 pt-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Crown className="h-12 w-12 text-purple-600 mb-4" />

            {verificationStatus === 'loading' && (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
                <h2 className="text-2xl font-bold text-center">Verifying Email</h2>
                <p className="text-center text-gray-600">
                  Please wait while we verify your email address...
                </p>
              </div>
            )}

            {verificationStatus === 'success' && (
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
                <h2 className="text-2xl font-bold text-center">Email Verified!</h2>
                <p className="text-center text-gray-600">
                  Your email has been successfully verified.
                </p>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => {/* Navigate to dashboard or home */}}
                >
                  Continue to The Crown List
                </Button>
              </div>
            )}

            {verificationStatus === 'error' && (
              <div className="flex flex-col items-center space-y-4">
                <XCircle className="h-16 w-16 text-red-500" />
                <h2 className="text-2xl font-bold text-center">Verification Failed</h2>
                <p className="text-center text-gray-600">
                  We couldn't verify your email address. The link may have expired or is invalid.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {/* Handle resend verification */}}
                >
                  Resend Verification Email
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}