//DROPDOWN FOR OUR USER NAVBAR

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, UserAuth } from '../functions/authContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserDropdown() {

  const {currentUser, logOut} = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {

    try{
      await logOut()
      navigate('/')

    }
    catch(error){
      console.log(error.message)
    }

  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ">
          <h1>{(currentUser && currentUser.displayName) || currentUser.email}</h1>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to='account' className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                 
               
                  Account
                </Link>
              )}
            </Menu.Item>
{/* 
            <Menu.Item>
              {({ active }) => (
                <Link to='settings' className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                 
               
                  Settings
                </Link>
              )}
            </Menu.Item> */}

            {/* <Menu.Item>
              {({ active }) => (
                <Link to='purchase' className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                 
               
                  Purchase
                </Link>
              )}
            </Menu.Item> */}

            <Menu.Item>
              {({ active }) => (
                <Link
                 onClick={handleSignOut}
                 className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                
                  Sign out
                </Link>
              )}
            </Menu.Item>
           
          
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}



