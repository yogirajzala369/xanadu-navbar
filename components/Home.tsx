import { StyledParagraphProps, TestimonialProps } from './types';

const StyledParagraph = ({ title, content }: StyledParagraphProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
)};

const Testimonial = ({ quote, author }: TestimonialProps) => {
    return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-2">{quote}</p>
        <p className="text-gray-800 font-semibold">{author}</p>
    </div>
)};

export const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 w-full max-w-screen-xl px-16 md:px-40">
        <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-blue-500">
                    Welcome to HP Blog
                </span>
            </h1>
            <p className="text-gray-600 mb-8">
                Discover the amazing features and testimonials of our app.
            </p>
        </div>
        <div className="grid gap-6 items-center">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1691441131483-7901e11ba084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                    alt="App illustration"
                    className="w-full rounded-lg shadow-xl"
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <div className="space-y-8">
                    <StyledParagraph
                        title="Feature 1"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />
                    <StyledParagraph
                        title="Feature 2"
                        content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum"
                    />
                </div>
            </div>
        </div>
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {Array.from({ length: 4 }).map((_, index) => (
                <Testimonial
                    key={index}
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    author="John Doe"
                />))}
            </div>
        </div>
      </div>
    </div>
  );
};
