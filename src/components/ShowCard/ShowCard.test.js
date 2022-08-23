/**
 * @jest-environment jsdom
 */

 import { screen, render } from '@testing-library/react'
 import '@testing-library/jest-dom'
 import React from 'react'
 
 import ShowCard from '.'
 
 describe("ShowCard component", () => {

    beforeEach(()=>{
        render(<ShowCard data={{ summary:"Test description", name: "Test name"}}/>);
    })
 
    it("Displays the appropriate description", ()=> {
          
         const desc = screen.queryByRole("paragraph");
 
         expect(desc).toBeInTheDocument();
         expect(desc.textContent).toBe("Test description");
 
     })

    it("Displays image", ()=> {
                 
        const image = screen.queryByRole("img");

        expect(image).toBeInTheDocument();

    })
 })
 