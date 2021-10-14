import Posts from "./Posts";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";


const Feed = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className="col-span-2">
                {/* stories */}
                <Stories />
                {/* posts */}
                <Posts />
            </section>
            
            {/* Section */}
            <section className="hidden xl:inline-grid md:col-span-1">
                {/* mini profile */}
                <MiniProfile />
                {/* sugestions */}
                <Suggestions />
            </section>
        </main>
    );
}

export default Feed;