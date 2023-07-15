import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from '../../hook/useApi'

const ProductBlock = (props) => {

    const [price, setPrice] = useState(null)

    //console.log(props)

const api = useApi()
useEffect(()=>{
    (async()=>{
        const variantCode = props.item.defaultVariant.split("/").reverse()[0]
        const ProductDetailResponce = await api.get ("shop/product-variants/" + variantCode)

        console.log("ProductDetailResponce >>>",ProductDetailResponce.data)
        setPrice(ProductDetailResponce.data)
    })

    ()
},[])


  return (


    <>
    <div className="product-block">
                    <div className="product-img">
                      <Link to={"/product/detail"}>
                        <img
                          src={"https://ecommerce.udemig.dev" + props.item.images[0].path}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link to={"/product/detail"} className="product-title">
                          {props.item.name} <strong></strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          {price?.price}
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1400
                        </Link>
                        <span className="offer-price">20%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default ProductBlock