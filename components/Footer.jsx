import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'

export const Footer = () => {
    return (
        // <div id='intro' className="mb-0 fixed bottom-0 lg:w-9/12 w-full">
            <div className="flex fixed bottom-0 lg:w-9/12 w-full h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>2024 All Rights Reserved.</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>hoangxam2@gmail.com</div>
                </div>
            </div>
        // </div>
    )
}

export default Footer