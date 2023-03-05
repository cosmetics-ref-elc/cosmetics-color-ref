import pureColorProduct from '../assets/pureColor.png';
import no002 from '../assets/002colorCombination.png';
import { useState } from 'react';

const PureColor = () => {

    const [selectedColor, serSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        serSelectedColor(color)
    }



    return (

        <div className="pureColor">
            <div className='pureColorImgContainer'>
                <img src={pureColorProduct} alt="pure color product" className='pureColorProduct' />
            </div>

            <h2>Pure Color</h2>
            <h2>Revitalizing Crystal Balm</h2>

            <div className='colorCombinations'>

                <div className='colorCombination 002'>
                    <img src={no002} alt="002 COSMIC CRYSTAL" />
                </div>

                <div className='colorCombination 004'>
                    <img src={no002} alt="004 CARING CRYSTAL" />
                </div>

                {/* will be adding more */}


            </div>

            <h3 className='002'>002 COSMIC CRYSTAL</h3>
            <h3 className='004'>004 CARING CRYSTAL</h3>
            {/* will be adding more */}


            <div className='info'> {/* will be adding drop down functions */}
                <div>
                    <h4>How to use</h4>
                </div>

                <div>
                    <h4>
                        Ingredients
                    </h4>
                </div>
            </div>


            <div className='altName refernceInfo'>
               <h4>Alt Name:</h4>
                <p>Apricot Delight</p>
            </div>

            <div className='description refernceInfo'>
                <h4>Description:</h4>
                <p>
                    This color is a muted, warm pink with a slightly grayish undertone.
                    It can be a great option for adding a soft, romantic
                    touch with a subtle hint of sweetness to your makeup look.
                </p>
            </div>

            <div className='earthHue refernceInfo'>
                <h4>Finding Earthy Hues:</h4>
                <p>One plant that comes to mind when thinking of the color #d5a397 is the apricot tree, which produces sweet and juicy fruits that have a similar warm and inviting tone to this color. The tree's bark and branches also have a woody brown color that complements the soft peachy hues of the fruit.
                </p>
            </div>

            <div className='supportInfo refernceInfo'>
                <h4>Color Support Info</h4>
            </div>





        </div>
    )
}


export default PureColor