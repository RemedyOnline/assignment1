const Contact = () => {
    return (
        <>
            {/* <!-- Contact Section --> */}
            <section id="contact" class="py-20 bg-gray-100">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-bold text-blue-600">Get in Touch</h2>
                    <p class="text-gray-600 mt-4">Interested in purchasing a Kantanka vehicle? Have any questions? Feel free to reach out!</p>
                    <form class="mt-8 max-w-xl mx-auto">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 mb-4 border rounded-lg">
                            <input type="email" placeholder="Your Email" class="w-full px-4 py-2 mb-4 border rounded-lg">
                                <textarea placeholder="Your Message" class="w-full px-4 py-2 mb-4 border rounded-lg"></textarea>
                                <button class="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">Send Message</button>
                            </form>
                        </div>
                    </section>
                </>
                )
};

export default Contact;