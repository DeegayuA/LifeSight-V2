"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CallAssistantPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/app">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to App
          </Link>
        </Button>

        <Card className="p-8 text-center space-y-6">
          <Phone className="w-12 h-12 mx-auto text-primary" />
          <h1 className="text-3xl font-bold">Connect with an Assistant</h1>
          <p className="text-lg text-muted-foreground">
            Our trained assistants are available 24/7 to provide personalized help when you need it.
          </p>
          <Button size="lg" className="w-full">
            Call Now
          </Button>
        </Card>
      </div>
    </main>
  );
}
