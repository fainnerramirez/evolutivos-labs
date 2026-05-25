import { File } from "lucide-react";
import { OrbitingCircles } from "../components/ui/orbiting-circles";

export default function Hero() {
    return (
        <div className="relative flex h-[500px] w-[500px] items-center justify-center overflow-hidden bg-white">

            {/* OUTER */}
            <OrbitingCircles
                iconSize={55}
                radius={200}
                duration={20}
            >
                <File />
                <File />
                <File />
                <File />
                <File />
            </OrbitingCircles>

            {/* INNER */}
            <OrbitingCircles
                iconSize={40}
                radius={120}
                duration={15}
                reverse
                speed={2}
            >
                <File />
                <File />
                <File />
                <File />
            </OrbitingCircles>
        </div>
    );
}