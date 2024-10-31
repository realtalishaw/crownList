"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Facebook, Mail, CheckCircle2, Crown } from "lucide-react";
import { useAuth } from '@/hooks/use-auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { signInWithMagicLink, isLoading } = useAuth();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const returnUrl = searchParams.get('returnUrl');

  const handleMagicLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    try {
      const success = await signInWithMagicLink(email, returnUrl);
      if (success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send magic link. Please try again.' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6 pt-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <Crown className="h-12 w-12 text-purple-600" />
                <div className="h-px w-24 bg-purple-200 my-4" />
              </div>
              <CheckCircle2 className="h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-bold text-center">Magic Link Sent!</h2>
              <p className="text-center text-gray-600">
                We've sent a magic link to:
              </p>
              <p className="text-lg font-medium text-purple-600">{email}</p>
              <p className="text-center text-gray-600 mt-2">
                Click the link in your email to sign in to The Crown List
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setEmail('');
                  setIsSubmitted(false);
                  setStatus({ type: '', message: '' });
                }}
              >
                Use a different email
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
            Welcome to The Crown List
          </CardTitle>
          <CardDescription className="text-center text-base">
            Login or create an account for The Crown List
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {message && (
            <Alert className="mb-4">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {/* Magic Link Form */}
          <form onSubmit={handleMagicLinkSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full transition-shadow duration-200 focus:shadow-lg"
              />

              {status.type === 'error' && (
                <Alert variant="destructive" className="py-2">
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              <Mail className="mr-2 h-4 w-4" />
              {isLoading ? 'Sending...' : 'Send Magic Link'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full transition-all duration-200 transform hover:scale-[1.02] hover:bg-blue-50 border-blue-600 text-blue-600"
              onClick={() => {/* Implement Facebook OAuth */}}
            >
              <Facebook className="mr-2 h-4 w-4" />
              Continue with Facebook
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full transition-all duration-200 transform hover:scale-[1.02] hover:bg-gray-50"
              onClick={() => {/* Implement Google OAuth */}}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Terms and Privacy Notice */}
          <p className="text-sm text-center text-gray-500 mt-4">
            By signing up, you confirm that you're over 13 and agree to our{" "}
            <a href="/terms-conditions" className="text-purple-600 hover:underline">Terms & Conditions</a>
            {" "}and{" "}
            <a href="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}