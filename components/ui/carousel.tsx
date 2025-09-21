import { ArrowLeft, ArrowRight } from "lucide-react-native"
import React, { useRef, useState } from "react"
import { Dimensions, View } from "react-native"
import CarouselLib from "react-native-reanimated-carousel"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const { width } = Dimensions.get("window")

type CarouselProps = {
  data: React.ReactNode[]
  height?: number
  loop?: boolean
  autoPlay?: boolean
  className?: string
}

type CarouselContextProps = {
  currentIndex: number
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = ({
  data,
  height = 200,
  loop = false,
  autoPlay = false,
  className,
  children,
}: React.PropsWithChildren<CarouselProps>) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<any>(null)

  const scrollPrev = () => {
    carouselRef.current?.scrollTo({ index: currentIndex - 1, animated: true })
  }

  const scrollNext = () => {
    carouselRef.current?.scrollTo({ index: currentIndex + 1, animated: true })
  }

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        scrollPrev,
        scrollNext,
        canScrollPrev: currentIndex > 0,
        canScrollNext: currentIndex < data.length - 1,
      }}
    >
      <View className={cn("relative", className)}>
        <CarouselLib
          ref={carouselRef}
          width={width - 40}
          height={height}
          data={data}
          loop={loop}
          autoPlay={autoPlay}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ item }) => (
            <View className="flex-1 items-center justify-center">
              {item}
            </View>
          )}
        />
        {children}
      </View>
    </CarouselContext.Provider>
  )
}

const CarouselPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      className={cn("absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8", className)}
      disabled={!canScrollPrev}
      onPress={scrollPrev}
      {...props}
    >
      <ArrowLeft size={16} />
    </Button>
  )
}

const CarouselNext = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      className={cn("absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8", className)}
      disabled={!canScrollNext}
      onPress={scrollNext}
      {...props}
    >
      <ArrowRight size={16} />
    </Button>
  )
}

// No need for CarouselContent & CarouselItem separately,
// since RN carousel renders items directly. But we can keep stubs for API compatibility.
const CarouselContent = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

const CarouselItem = ({ children }: { children: React.ReactNode }) => (
  <View className="flex-1">{children}</View>
)

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
}

