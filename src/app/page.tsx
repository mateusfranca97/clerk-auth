"use client"
import CardComponent from "@/components/ui/component/Card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { RxHamburgerMenu } from "react-icons/rx";
import { CardList, ListMenu } from "./constraint/const";


export default function Home() {
  const cards = CardList
  const menuItems = ListMenu
  return (
    <body>
      <header className="h-20 w-full flex items-center px-5 ">
        <div className="flex w-screen justify-between items-center">
          <div className="">
            <a href="https://github.com/mateusfranca97" className="text-md font-bold"><span className="text-red-700">@</span>mateusfranca97</a>
          </div>
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger>
                <Button className="h-10"><RxHamburgerMenu size={25} /></Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Menu</DialogTitle>
                  <DialogDescription>
                    <ul className="flex flex-col gap-2">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          <a href="#">Home</a>
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          <a href="#">About</a>
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          <a href="#">Services</a>
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          <a href="#">Experience</a>
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          <a href="#">Works</a>
                        </Button>
                      </DialogClose>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="hidden md:flex md:gap-6 md:items-center md:justify-between">
            <div className="flex md:gap-6">
              {menuItems.map(e => (<a href={e.link}>{e.title}</a>))}
            </div>
            <Dialog>
              <DialogTrigger>
                <Button>Contact Me</Button>
                </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  {/* <DialogDescription>
                  </DialogDescription> */}
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <div className="hero h-[35rem] m-5">
        <div className="gap-5 h-60 flex flex-col justify-center items-center text-center font-semibold text-2xl md:text-4xl lg:text-5xl">
          <h1> Life Planning, Making <br /> Easy to Turn Dreams a Reality.</h1>
          <span className="text-sm md:text-lg">Get Exclusive offers on purchase of any plans</span>
        </div>
        <div className="featured">
          <h1 className="font-semibold text-">Featured Plans</h1>
          <div className="cards inline-grid grid-cols sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {cards.map((e, key) => (
                <CardComponent key={key} title={e.title} content={e.description} />
              ))}
          </div>
        </div>
      </div>
    </body>
  )
}
