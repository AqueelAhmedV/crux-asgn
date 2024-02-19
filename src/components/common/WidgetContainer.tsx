import { 
    Card,
    CardBody,
    // Typography,
    // Button,
    // CardFooter
} from '@material-tailwind/react'
import { WidgetContainerProps } from './commonTypes'

export function WidgetContainer({ children, dimension }: WidgetContainerProps) {
    const dimensionClasses = {
        smallSquare: ' col-span-2 row-span-2  ',
        horizontal: '   col-span-4 row-span-2 ',
        vertical: '  col-span-2 row-span-4 ',
        bigSquare: '  col-span-4 row-span-4 '
    }

    return (
        <Card placeholder={''} className={"object-contain border" + dimensionClasses[dimension]} >
            <CardBody placeholder={''} className='p-0 '>
                {children}
            </CardBody>
            {/* <CardFooter className="pt-0">
            <Button>Read More</Button>
            </CardFooter> */}
        </Card>
    )
}