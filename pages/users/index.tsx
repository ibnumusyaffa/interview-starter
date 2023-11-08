/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { useRouter } from 'next/router'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/alert-dialog'
import { Button, ButtonIcon } from '@/components/button'
import { EmptyState } from '@/components/empty-state'
import { InputSearch } from '@/components/input'
import { NativeSelect } from '@/components/native-select'
import { Pagination } from '@/components/pagination'
import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/table'
import { useToast } from '@/components/toast'

export default function Example() {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const toast = useToast()
  return (
    <div>
      <AlertDialog
        open={showAlert}
        onOpenChange={(value) => setShowAlert(value)}
      >
        <AlertDialogCloseButton></AlertDialogCloseButton>
        <AlertDialogContent
          title="Delete user"
          description="Are you sure you want to delete this user ? This action cannot be undone."
        ></AlertDialogContent>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="default">Cancel</Button>
          </AlertDialogCancel>
          <Button
            onClick={() => {
              setShowAlert(false)
              toast.success({
                title: 'User Deleted',
                description: 'The user has been successfully deleted.',
              })
            }}
            color="danger"
            variant="solid"
          >
            Submit
          </Button>
        </AlertDialogFooter>
      </AlertDialog>

      {/*-------------------------------------------------------------------------*/}
      <div className="mb-5 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">
          Users Management
        </div>
        <div className="flex  space-x-3">
          <Button
            onClick={() => router.push('/users/create')}
            leftIcon={<PlusIcon className="h-4 w-4"></PlusIcon>}
          >
            Add User
          </Button>
        </div>
      </div>

      {/*-------------------------------------------------------------------------*/}
      <div className=" border border-gray-200 bg-white">
        <div className="flex justify-start  px-5 py-5">
          <div className="flex w-80 space-x-3 ">
            <InputSearch  placeholder="Search User..."></InputSearch>
          </div>
        </div>
        {/*-------------------------------------------------------------------------*/}
        <div className="">
          <Table withBorder loading={false}>
            <Thead>
              <Tr>
                <Th className="w-10">No.</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Created At</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...Array(10)].map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>Muhammad John Doe</Td>
                    <Td>john@example.com</Td>
                    <Td>31 May 1999</Td>

                    <Td>
                      <ButtonIcon
                        onClick={() => {
                          setShowAlert(true)
                        }}
                        variant="subtle"
                        color="danger"
                      >
                        <TrashIcon className="h-4 w-4"></TrashIcon>
                      </ButtonIcon>
                    </Td>
                  </Tr>
                )
              })}
              {/*-------------------------------------------------------------------------*/}
              <tr>
                <td colSpan={100} className="py-10">
                  <EmptyState
                    withIcon
                    title="No user found"
                    description="Your search did not match any project. Please try again or create project."
                    primaryAction={
                      <Button leftIcon={<PlusIcon></PlusIcon>}>
                        Create user
                      </Button>
                    }
                    secondaryAction={
                      <Button variant="default">Clear search</Button>
                    }
                  ></EmptyState>
                </td>
              </tr>
            </Tbody>
          </Table>
        </div>
        {/*-------------------------------------------------------------------------*/}
        <div className=" flex items-center justify-between px-5  py-5">
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <NativeSelect
              value={50}
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </NativeSelect>
            <div>Showing 10 of 100 items</div>
          </div>
          <Pagination
            page={1}
            totalPages={10}
            onChange={(page) => {
              console.log(page)
            }}
          ></Pagination>
        </div>
      </div>
    </div>
  )
}
