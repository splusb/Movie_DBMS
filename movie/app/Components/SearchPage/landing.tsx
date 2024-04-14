"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mt-16 mb-10">MOVIE SEARCH</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Keywords to search......"
          className="border-2 border-white bg-black text-white rounded-full py-2 px-10 focus:outline-none focus:border-gray-500 mr-4"
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="border-2 bg-black border-red-600 font-bold py-2 px-4 rounded-full"
            >
              Advanced Search
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Edit Filters</SheetTitle>
              <SheetDescription className="text-white">
                Prime Range:
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-white text-right">From</Label>
                <Input
                  id="from"
                  className="col-span-3 bg-black text-white border border-white rounded-md py-2 px-4"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-white text-right">To</Label>
                <Input
                  id="to"
                  className="col-span-3 bg-black text-white border border-white rounded-md py-2 px-4"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mt-10 ml-10 mb-20">
                <div className="col-span-4 md:col-span-3">
                  <select
                    id="genre"
                    className="w-full bg-white text-black border border-black rounded-md py-2 px-4"
                  >
                    <option value="horror">Genre</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                    <option value="romantic">Romantic</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="adventure">Adventure</option>
                  </select>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="bg-red-500 text-white ">
                  Save Changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <p className="mb-4">100 results in 10 ms</p>
      <div className="max-w-md rounded overflow-hidden shadow-lg mb-8 border-2 border-white">
        <div className="flex">
          <img className="w-1/3" src="/Movie.jpeg" alt="Movie" />
          <div className="px-6 py-4">
            <p className="text-white text-sm">
              Title: Spider Man
              <br />
              Action/Sci-fi 2h 28m
              <br />
              Imdb Rating: 8.2/10
              <br />
              <br />
              Spider-Man: Homecoming is a 2017 American superhero film based on
              the Marvel Comics character Spider-Man. It is the second reboot of
              the Spider-Man film series and the 16th film in the Marvel
              Cinematic Universe (MCU).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

/*
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mt-16 mb-10">MOVIE SEARCH</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Keywords to search......"
          className="border-2 border-white bg-black rounded-full py-2 px-10 focus:outline-none focus:border-gray-500 mr-4"
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="border-2 bg-black border-red-600 font-bold py-2 px-4 rounded-full"
            >
              Advanced Search
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Edit Filters</SheetTitle>
              <SheetDescription className="text-white">
                Prime Range:
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">From</Label>
                <Input id="from" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">To</Label>
                <Input id="to" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save Changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <p className="mb-4">100 results in 10 ms</p>
      <div className="max-w-md rounded overflow-hidden shadow-lg mb-8 border-2 border-white">
        <div className="flex">
          <img className="w-1/3" src="/Movie.jpeg" alt="Movie" />
          <div className="px-6 py-4">
            <p className="text-white  text-sm">
              Title: Spider Man
              <br />
              Action/Sci-fi 2h 28m
              <br />
              Imdb Rating: 8.2/10
              <br />
              <br />
              Spider-Man: Homecoming is a 2017 American superhero film based on
              the Marvel Comics character Spider-Man. It is the second reboot of
              the Spider-Man film series and the 16th film in the Marvel
              Cinematic Universe (MCU).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;

*/
