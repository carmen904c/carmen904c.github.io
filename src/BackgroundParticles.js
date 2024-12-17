import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Main library function

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    // Loads all necessary features
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#222", // Background color
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" }, // Click adds particles
            onHover: { enable: true, mode: "repulse" }, // Hover repels particles
            resize: true,
          },
          modes: {
            push: { particles_nb: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" }, // Particle color
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50, // Number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Shape of particles
          },
          size: {
            value: { min: 1, max: 5 }, // Size range of particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
