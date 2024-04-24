import { useEffect } from 'react';
import Head from 'next/head';
import { DragDropContext } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { Box, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { KanbanColumn } from '../../components/dashboard/kanban/kanban-column';
import { KanbanColumnAdd } from '../../components/dashboard/kanban/kanban-column-add';
import { gtm } from '../../lib/gtm';
import { getBoard, moveCard } from '../../slices/kanban';
import { useDispatch, useSelector } from '../../store';

const Kanban = () => {
  const dispatch = useDispatch();
  const { columns } = useSelector((state) => state.kanban);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
      dispatch(getBoard());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  const handleDragEnd = async ({ source, destination, draggableId }) => {
    try {
      // Dropped outside the column
      if (!destination) {
        return;
      }

      // Card has not been moved
      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        // Moved to the same column on different position
        await dispatch(moveCard(draggableId, destination.index));
      } else {
        // Moved to another column
        await dispatch(moveCard(draggableId, destination.index, destination.droppableId));
      }

      toast.success('Card moved!');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <Head>
        <title>
          Dashboard: Kanban | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            pl: 3,
            pt: 8
          }}
        >
          <Typography variant="h4">
            Kanban
          </Typography>
        </Box>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexShrink: 1,
              overflowX: 'auto',
              overflowY: 'hidden'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                px: 1,
                py: 3
              }}
            >
              {columns.allIds.map((columnId) => (
                <KanbanColumn
                  columnId={columnId}
                  key={columnId}
                />
              ))}
              <KanbanColumnAdd />
            </Box>
          </Box>
        </DragDropContext>
      </Box>
    </>
  );
};

Kanban.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Kanban;
