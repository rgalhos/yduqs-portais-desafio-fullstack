import { CourseOptionCard } from "@/components/CourseOptionCard/CourseOptionCard";
import { PageHeading } from "@/components/PageHeading/PageHeading";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <PageHeading
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição. "
      />
      <Box
        component="main"
        className="vw-adjustable"
        sx={{
          paddingTop: 8,
          paddingBottom: 14,
        }}
      >
        <Stack display="flex" flexDirection="row" flexWrap="wrap" gap={6}>
          <CourseOptionCard
            type="detailed"
            fullPrice="R$ 4.752,00"
            noInstallments={18}
            installmentPrice="R$ 169,95"
            price="R$ 2.613,60"
            title={
              <>
                <span>Presencial</span>
                <span>Manhã</span>
              </>
            }
            location={{
              unit: "Campinas - Vila Industrial",
              address:
                "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
            }}
          />
          <CourseOptionCard
            type="detailed"
            fullPrice="R$ 4.752,00"
            noInstallments={18}
            installmentPrice="R$ 169,95"
            price="R$ 2.613,60"
            title={
              <>
                <span>Presencial</span>
                <span>Manhã</span>
              </>
            }
            location={{
              unit: "Campinas - Vila Industrial",
              address:
                "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
            }}
          />
        </Stack>
      </Box>
    </div>
  );
}
