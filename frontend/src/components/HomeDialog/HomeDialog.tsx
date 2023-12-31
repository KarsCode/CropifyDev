'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
const HomeDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Team RAMPage</DialogTrigger>
        
        <DialogContent>
            <DialogHeader>
            <DialogTitle><h1>Chamman Coding Division Inc.</h1></DialogTitle>
            <DialogDescription>
                <div className='text-lg'>
                Meet the minds behind Cropify - the dynamic team of RAMPage. Comprising Anirvesh Arcot, Gaurav Pradeep, Kartik Subbaram, and Naman Kumar, our diverse skill sets and passion for revolutionizing agriculture drive us to create a smarter, more sustainable future. Together, we're committed to bringing you innovative solutions that redefine the way we cultivate and harvest. Join us on this journey towards a greener, more prosperous tomorrow.


                </div>
            </DialogDescription>
            </DialogHeader>

        </DialogContent>
        
    </Dialog>

    </div>
  )
}

export default HomeDialog
