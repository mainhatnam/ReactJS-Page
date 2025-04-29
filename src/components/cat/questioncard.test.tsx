import {render,screen} from '@testing-library/react'
import {describe,it,expect} from 'vitest'
import { CatCard } from "./cardcat";


describe("ok nem",() => {
    it('Nem first test with react js',() => {
        render(<CatCard description="day la con meo" image="https://cdn2.thecatapi.com/images/bsd.jpg" name="meo anh long ngan" />)
        expect(screen.getByText("day la con meo1")).toBeInTheDocument()
    })
})
