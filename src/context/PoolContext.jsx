import { createContext, useState } from 'react'

export const ContentContext = createContext({
	setContentIndex: () => {},
	content: null,
})

export const ContentProvider = ({ children }) => {
	const [content, setContentIndex] = useState(null)

	return (
		<ContentContext.Provider value={{ content, setContentIndex }}>
			{children}
		</ContentContext.Provider>
	)
}
