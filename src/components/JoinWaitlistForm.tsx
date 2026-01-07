import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const JoinWaitlistForm = ({ onSubmitted }: { onSubmitted?: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      toast({ title: "Please enter an email." });
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, "waitlist"), {
        name,
        email,
        company,
        timestamp: serverTimestamp(),
      });

      toast({ title: "Thanks — you are on the waitlist!" });
      setSubmitted(true);
      onSubmitted?.();
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Submission failed. Try again later.";
      setError(errorMessage);
      toast({ title: errorMessage });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <DialogHeader>
        <DialogTitle>Join the Waitlist</DialogTitle>
        <DialogDescription>
          Enter your details and we’ll add you.
        </DialogDescription>
      </DialogHeader>

      {!submitted ? (
        <div>
          <div className="grid grid-cols-1 gap-3">
            <label className="text-sm text-muted-foreground">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <label className="text-sm text-muted-foreground">Email *</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@company.com"
            />
            <label className="text-sm text-muted-foreground">Company</label>
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Optional"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="mt-4" disabled={submitting}>
                {submitting ? "Submitting..." : "Join Waitlist"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      ) : (
        <div className="py-6 text-center">
          <p className="text-lg font-medium">
            Thanks — you’re on the waitlist.
          </p>
          <div className="mt-4">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </div>
        </div>
      )}
    </form>
  );
};

export default JoinWaitlistForm;
