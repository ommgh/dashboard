"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Note: In a real application, you should store this in an environment variable
mapboxgl.accessToken =
  "pk.eyJ1Ijoib21taXNocmEiLCJhIjoiY20zd2xteDBlMHhycTJqczdodjl3NWg4bCJ9.-H4PA1gMeN189V7leJyw0A";

interface Order {
  id: number;
  address: string;
  coordinates: [number, number];
}

export default function OrderMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/ommishra/cm3wm53u800ev01s88m16bqd3",
      center: [20.5937, 78.9629],
      zoom: 9,
    });

    const resizeMap = () => {
      map.current?.resize();
    };

    window.addEventListener("resize", resizeMap);

    // Fetch orders data (simulated here)
    const fetchOrders = async () => {
      // In a real application, you would fetch this data from your API
      const mockOrders: Order[] = [
        {
          id: 1,
          address:
            "Kanpur, Central Railway Station, Mirpur208001 ,Kanpur, UPIndia",
          coordinates: [26.4499, 80.3319],
        },
        {
          id: 2,
          address: "Lakshmipur,BhairawAsthan847404, Jhanjharpur, BR,India",
          coordinates: [26.262, 86.2769],
        },
        {
          id: 3,
          address: "Shyam Villa, Semnari Road, Ashtha466116, Ashta, MP,India",
          coordinates: [23.2599, 77.4126],
        },
      ];
      setOrders(mockOrders);
    };

    fetchOrders();

    return () => {
      window.removeEventListener("resize", resizeMap);
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || orders.length === 0) return;

    orders.forEach((order) => {
      new mapboxgl.Marker()
        .setLngLat(order.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3>Order #${order.id}</h3><p>${order.address}</p>`
          )
        )
        .addTo(map.current!);
    });

    // Fit map to markers
    const bounds = new mapboxgl.LngLatBounds();
    orders.forEach((order) => bounds.extend(order.coordinates));
    map.current.fitBounds(bounds, { padding: 50 });
  }, [orders]);

  return <div ref={mapContainer} className="w-full h-full" />;
}
