"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");

    if (cursor && window.matchMedia("(pointer: fine)").matches) {
      const onMove = (e: MouseEvent) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      };
      document.addEventListener("mousemove", onMove);

      const enter = () => cursor.classList.add("is-hover");
      const leave = () => cursor.classList.remove("is-hover");
      const interactive = document.querySelectorAll("a, button");
      interactive.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

      // Scroll reveal
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              observer.unobserve(e.target);
            }
          }),
        { threshold: 0.07, rootMargin: "0px 0px -50px 0px" },
      );
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => observer.observe(el));

      return () => {
        document.removeEventListener("mousemove", onMove);
        interactive.forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
        observer.disconnect();
      };
    } else if (cursor) {
      cursor.style.display = "none";
      document.body.style.cursor = "auto";
      document
        .querySelectorAll<HTMLElement>("a")
        .forEach((a) => (a.style.cursor = "auto"));

      // Still observe reveals on touch
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              observer.unobserve(e.target);
            }
          }),
        { threshold: 0.07, rootMargin: "0px 0px -50px 0px" },
      );
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return null;
}
