import React, { useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills=["HTML","CSS","JavaScript","ReactJS"]
const Profile = () => {
  const isResume=true;
  const [open,setOpen]=useState(false);
    
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex item-center gap-3 my-2">
            <Mail />
            <span>xys@gmail.com</span>
          </div>
          <div className="flex itm-center gap-3 my-2">
            <Contact />
            <span>88470*****</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
            {
                skills.length != 0 ? skills.map((item,index)=><Badge Key={index}>{item}</Badge>):<span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm item-center gap=1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume? <a target='blank' href='https://github.com/SnehaSharma2004/Job-Portal/' className="text-blue-500 hover:underline sursor-pointer">JobPortal</a>: <span>NA</span>
            }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2x'>
            <h1 className='font-bold text-lg my-5'>Applied Job</h1>
            {/* Application Table */}
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile;
