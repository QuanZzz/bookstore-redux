import { addBook, editBook } from "@/actions/actions";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DEFAULT_BOOK_FIELDS } from "@/utils/books";
import { generateUniqueId } from "@/utils/generateUniqueId";
import PropTypes from "prop-types";

export const BookModal = ({ show, handleClose, book }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(DEFAULT_BOOK_FIELDS);

  useEffect(() => {
    if (book) {
        setFormData(book);
    } else {
      setFormData({
          id: generateUniqueId(),
          name: "",
          price: 0,
          category: "",
          description: "",
      });
    }
  }, [book]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSave = () => {
    if(book){
      dispatch(editBook(book.id, formData));
    }else {
      dispatch(addBook(formData));
    }
    setFormData(DEFAULT_BOOK_FIELDS);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book ? "Edit Book" : "Add Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBookName">
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter book name"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
                required
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
                type="number"
                placeholder="Enter book price"
                name="price"
                value={formData.price}
                onChange={handleOnChange}
                required
            />
            <Form.Label>Category</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter book category"
                name="category"
                value={formData.category}
                onChange={handleOnChange}
                required
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
                as="textarea"
                placeholder="Enter book description"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
                required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          <Button variant="primary" onClick={() => handleOnSave(formData)}>
              Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

BookModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  book: PropTypes.object
}