import React,{useState} from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader, Loader2 } from "lucide-react";

const UpdateProfileDialog = ({open,setOpen}) => {
    const[loading,setLoading]= useState(false);
  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=> setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="name" className="text-rigth">
                  Name
                </label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="email" className="text-rigth">
                  Email
                </label>
                <Input id="email" name="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="number" className="text-rigth">
                  Number
                </label>
                <Input id="number" name="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="bio" className="text-rigth">
                  Bio
                </label>
                <Input id="bio" name="bio" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="skills" className="text-rigth">
                  Skills
                </label>
                <Input id="skills" name="skills" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-2">
                <label htmlFor="file"  className="text-rigth">
                  Resume
                </label>
                <Input id="file"  name="file" type="file" accept="application/pdf" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
            {
                loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
            }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
