import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton, Badge, Modal, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import sly from './images/slayf.png'
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
    const cartObj = useSelector(store => store)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    //Function to close modal
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">
                    <div className='logo'>
                        <Link to='' className="navbar-brand h3">SlayFit</Link>
                        <img src={sly} alt='' width={200} height={100} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 h-5">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' class="nav-link active" aria-current="page" >New Arrivals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="nav-link active" aria-current="page" >Health & Beauty</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="nav-link active" aria-current="page" >Flash Sales</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                        <IconButton onClick={() => setOpen(true)}>
                            <Badge badgeContent={cartObj.cart.length} color='error'>
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                            </Badge>
                        </IconButton>

                        <Modal open={open} onClose={handleClose}>
                            <Box className='box-mod'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Photo</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        cartObj.cart.map((item, index) => {

                                            const deleteItem = () => {
                                                dispatch({type: "DELETE_ITEM", payload: item })
                                            }
                                            return (
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td><img src={item.itemImage} width={250} height={250} /></td>
                                                        <td>{item.itemName}</td>
                                                        <td>&#8358;{item.itemPrice}</td>
                                                        <td><button className="btn btn-danger" onClick={() => deleteItem(item)}>Delete</button></td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}

                                </table>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
