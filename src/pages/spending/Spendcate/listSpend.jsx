import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchSpendList, RemoveSpend } from "../../../redux/action/Spending";

const ListSpend = (props) => {
    useEffect(() => {
        props.loadspend();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Do you want to remove?')) {
            props.removespend(id);
            props.loadspend();
        }
    };

    return (
        <>
            <div className="p-6 mt-5 bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
                <div className="overflow-hidden">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-y-0 justify-end mx-4 py-4 dark:border-gray-700">
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <Link to="/spending">
                                <button
                                    type="button"
                                    id="createProductButton"
                                    className="flex items-center justify-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <i className="fa fa-plus h-3.5 w-3.5 mr-1.5 -ml-1 mt-1" aria-hidden="true"></i>
                                    Add new
                                </button>
                            </Link>
                            <div className="flex items-center w-full md:w-auto">
                                <button
                                    id="actionsDropdownButton"
                                    data-dropdown-toggle="actionsDropdown"
                                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button"
                                >
                                    Actions
                                    <i className="fa fa-sort-desc -mr-1 ml-1.5 mt-1 w-5 h-5" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <span>STT</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="p-4">Khoản chi</th>
                                    <th scope="col" className="p-4">Giá chi</th>
                                    <th scope="col" className="p-4">Hình thức chi</th>
                                    <th scope="col" className="p-4">Ngày chi</th>
                                    <th scope="col" className="p-4">Last Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.spend.spendlist &&
                                    props.spend.spendlist.map((item) => (
                                        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700" key={item.id}>
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <span>{item.id}</span>
                                                </div>
                                            </td>
                                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center mr-3 uppercase" >
                                                    <img
                                                        src={item.icon_spend}
                                                        alt={`${item.category_spend_name} Icon`}
                                                        className="h-8 w-auto mr-3"
                                                    />
                                                    {item.category_spend_name}
                                                </div>
                                            </th>
                                            <td className="px-4 py-3">$_{item.amount}.M</td>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    <div className="h-4 w-4 rounded-full inline-block mr-2 "></div>
                                                    {item.payment_method_name}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    <i className="fa fa-calendar w-5 h-5 mt-2 text-gray-400 mr-2" aria-hidden="true"></i>
                                                    {new Date(item.date).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center space-x-4">
                                                    <Link to={"/edit/spending/" + item.id}>
                                                    <button
                                                        type="button"
                                                        className="flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                    >
                                                        <i className="fa fa-pencil-square-o h-4 w-4 mr-2 -ml-0.5 mt-1" aria-hidden="true"></i>
                                                        Edit
                                                    </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => { handleDelete(item.id) }}
                                                        type="button"
                                                        data-modal-target="delete-modal"
                                                        data-modal-toggle="delete-modal"
                                                        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                    >
                                                        <i className="fa fa-trash h-4 w-4 mr-2 -ml-0.5 mt-1" aria-hidden="true"></i>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        spend: state.spend,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadspend: () => dispatch(FetchSpendList()),
        removespend: (id) => dispatch(RemoveSpend(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpend);
