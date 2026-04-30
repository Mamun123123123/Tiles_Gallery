"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      <Button variant="secondary" className="flex items-center gap-2">
        <BiEdit /> Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-[95%] sm:w-full sm:max-w-md rounded-2xl">

            <Modal.CloseTrigger />

            <Modal.Header className="flex flex-col items-center text-center gap-2">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-lg sm:text-xl">
                Update User
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-4 sm:p-6">
              <Surface variant="default" className="p-0 sm:p-2">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                  </TextField>

                  <Modal.Footer className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <Button slot="close" variant="secondary" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close" className="w-full sm:w-auto bg-indigo-600 text-white">
                      Save
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}