import { CardStackDemo, Highlight } from "@/components/ui/card-stack-demo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center m-10 p-10">
        <Card className="w-80 h-96">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="destructive" className="mr-30">
          Not Interested
        </Button>
        <Button className="ml-30">Interested!</Button>
      </div>
    </div>
  );
}

//practice information
export const stupidListOfTasks = [
  {
    id: 0,
    name: "Sanjay Amirthraj",
    designation: "GOAT",
    content: <p>Sanjay is the goat</p>,
  },
  {
    id: 1,
    name: "Oleg",
    designation: "Is braindead",
    content: (
      <p>
        <Highlight>SCREW OLEG</Highlight> and allat
      </p>
    ),
  },
];
