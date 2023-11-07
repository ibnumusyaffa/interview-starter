import React from 'react'

import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input, InputPassword } from '@/components/input'

function Create() {
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div className="text-xl font-medium text-gray-800">Create User</div>
      </div>
      <div className="border border-gray-200 bg-white p-7">
        <form className="w-1/2 space-y-5">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input error name="email" placeholder="Email" value=""></Input>
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Fullname</FormLabel>
            <Input name="fullname" placeholder="Fullname" value=""></Input>
            {/* <FormErrorMessage>Email is required</FormErrorMessage> */}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputPassword
              name="password"
              placeholder="Password"
              value=""
            ></InputPassword>
            {/* <FormErrorMessage>Email is required</FormErrorMessage> */}
          </FormControl>
          <div className="flex justify-end space-x-5">
            <Button type="button" variant="default">
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
