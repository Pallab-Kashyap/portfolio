"use client";
import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { useToast } from "../ui/use-toast";
import { cn } from "@/lib/utils";

function Footer() {
  const year = new Date().getFullYear();
  const { toast } = useToast();

  const handleComingSoonClick = (title: string) => {
    toast({
      title: "Coming Soon!",
      description: `${title} feature will be available soon. Stay tuned!`,
      variant: "default",
      className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
    });
  };

  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          // Check if it's a coming soon item (href is "#")
          if (href === "#") {
            return (
              <Button
                key={`l_${index}`}
                variant={"link"}
                onClick={() => handleComingSoonClick(title)}
                className="text-xs underline-offset-4 hover:underline"
              >
                {title}
              </Button>
            );
          }

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
