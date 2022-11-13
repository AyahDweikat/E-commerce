import React from 'react';
import { FetchData } from '../../Utils/ApiUtils'
import ProductsCard from '../SubComp/ProductsCard';
import SearchFilter from '../SubComp/SearchFilter';
import { GlobalContext } from '../../Utils/Context';
import './Products.scss';
import ProductDetailsModal from '../SubComp/ProductDetailsModal';





class Products extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            products: [],
            filteredProducts:[],
            // productDetails:{}
        }
    }
    async componentDidMount(){
        const resp = await FetchData("https://fakestoreapi.com/products", "GET");
        if (resp.status === 200){
            this.setState({products: resp.data, filteredProducts: resp.data});
        } else {
        console.warn("sorry, this API failed");
        //// @TODO: we will handle it later// to work later
        }
    }
    onSearchFilterChanged(searchText, filterBy){
        const _filteredProducts = this.state.products.filter((item)=>{
            const lowercaseTitle = item.title.toLowerCase();
            const lowercaseDesc = item.description.toLowerCase();
            const lowercaseSearchText = searchText.toLowerCase();

            if(filterBy === "title"){
                return lowercaseTitle.includes(lowercaseSearchText)
            }
            else if(filterBy === "desc"){
                return lowercaseDesc.includes(lowercaseSearchText)
            } else {
                return lowercaseTitle.includes(lowercaseSearchText) || lowercaseDesc.includes(lowercaseSearchText)
            }
        })
        this.setState({
            filteredProducts: _filteredProducts
        })
    }
    onCardClicked(product){
        // console.log(product)
        this.context.showModal({
            body: <ProductDetailsModal product={product} />,
            // title: <span>{product.title}</span>
        });
    }



    
    render(){
        return (
            <div>
                <SearchFilter onChange={this.onSearchFilterChanged.bind(this)}/>
                {/* the value get from searchfilter (searchText) stored in this, and psss it to the function onSearchFilterChanged */}
                <div className='row mx-5'>
                    {this.state.filteredProducts.map((item, idx)=>{
                        return (
                            <div className='col-md-3 col-lg-2' key ={idx}>
                                <ProductsCard onClick={this.onCardClicked.bind(this, item)} product={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}




Products.contextType = GlobalContext;
export default Products;