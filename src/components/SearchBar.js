import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useFlexSearch } from 'react-use-flexsearch'

const index = 'pages'
const store = {
  1: { id: 1, title: 'Document 1' },
  2: { id: 2, title: 'Document 2' },
  3: { id: 3, title: 'Document 3' },
}

const SearchBar = () => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form>
          <Field name="query" />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
