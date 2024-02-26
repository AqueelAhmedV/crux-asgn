import { Button, Circle, IconButton } from "@chakra-ui/react";
import { ChartBarSquareIcon, ChatBubbleLeftRightIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";



export function Sidebar() {
    return (
        <div className="flex flex-col justify-between items-center w-full h-full">
            <div className="py-2 flex flex-col gap-2">
                <IconButton aria-label="cruxai" >
                    <img className="size-10 rounded-md" src={"/icons/cruxai_logo.jpg"}  />
                </IconButton>
                <div className="flex flex-col gap-3">
                    <IconButton aria-label="activity" bg="transparent">
                        <Square3Stack3DIcon className="size-7" color="gray"/>
                    </IconButton>
                    <IconButton aria-label="chats" bg="transparent">
                        <ChatBubbleLeftRightIcon className="size-7" color="gray"/>
                    </IconButton>
                    <IconButton isActive aria-label="analytics" bg="transparent">
                        <ChartBarSquareIcon className="size-7" color="gray"/>
                    </IconButton>
                </div>
            </div>
            <div className="py-2">
                <Circle as={Button} size={50} backgroundSize={'cover'} backgroundPosition={'center'} bgImage={'url(https://source.unsplash.com/random/?portrait=12345)'}/>
            </div>
        </div>
    )
}